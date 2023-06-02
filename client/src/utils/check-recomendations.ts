import { getFieldsId } from "./field-id-sorter";
import { convertProductsFields } from "./convert-products-fields"
import { useFetchData } from '../composables/fetch'

export const handleCheckRecomendation = async (inputs: any, selectors: any) => {
   const useFetch = useFetchData()
	const recomendedProducts = [];
	const exceptionsProducts = [];
	// Ищем ID отмеченных признаков
	const fieldsData = getFieldsId(inputs.value, selectors.value);
	//  Получаем все товары
	const existProducts: Array<any> = (await useFetch.getAllProducts()) as Array<any>;
	// Сверяем товары с признаками
	for (let existProduct of existProducts) {
		const parsedProductData = convertProductsFields(existProduct);
		const checked = checkProduct(parsedProductData, fieldsData);
		if (checked) {
			if (existProduct.exception) {
            exceptionsProducts.push(existProduct)
			} else {
            recomendedProducts.push(existProduct);
         }
		}
	}
	return {
		recomended: recomendedProducts,
      exceptions: exceptionsProducts,
		fields: fieldsData,
	};
	function checkProduct(product: any, fieldsData: any) {
		// Проверка обязательных полей
		if (product.fields && product.fields.length > 0) {
			for (let field of product.fields) {
				// Проверка, что все обязательные поля из товара присутствуют в анкете
				const fieldData = fieldsData.find(
					(data: any) => data.fieldId === field.id
				)
				if (!fieldData) {
               return false;
            }
				// Проверка, что значения полей совпадают
				if (field.value && fieldData.fieldValue) {
					// console.log('field.value', field.value)
					const [min, max] = field.value.split("<x<");
					const floatFieldVal = parseFloat(fieldData.fieldValue);
					if (!(parseFloat(min) <= floatFieldVal) ||!(floatFieldVal <= parseFloat(max))) {
						return false;
					}
				}
			}
		}
		// Проверка поля "хотябы одно из"
		if (product.orFields && product.orFields.length > 0) {
			if (
				!product.orFields.some((id: any) =>
					fieldsData.some((data: any) => data.fieldId === id)
				)
			) {
				return false;
			}
		}
		// Проверка поля "ни одного из"
		if (product.notFields && product.notFields.length > 0) {
			if (
				product.notFields.some((id: any) =>
					fieldsData.some((data: any) => data.fieldId === id)
				)
			) {
				return false;
			}
		}
		// Проверка поля "ни одного из группы"
		if (product.notOrFields && product.notOrFields.length > 0) {
			if (
				product.notOrFields.some((id: any) =>
					fieldsData.some((data: any) => data.fieldId === id)
				)
			) {
				return false;
			}
		}
		// Проверка поля "все из приоритетных"
		if (product.prioriteFields && product.prioriteFields.length > 0) {
			if (
				!product.prioriteFields.every((id: any) =>
					fieldsData.some((data: any) => data.fieldId === id)
				)
			) {
				return false;
			}
		}
		// Проверка поля "одно из приоритетных"
		if (product.prioriteOrFields && product.prioriteOrFields.length > 0) {
			if (
				!product.prioriteOrFields.some((id: any) =>
					fieldsData.some((data: any) => data.fieldId === id)
				)
			) {
				return false;
			}
		}
		// Если все проверки пройдены успешно, товар подходит
		return true;
   }
};
