export class AddProductDto {
   readonly name: string
   readonly url: string
   readonly recText?: string | null
   readonly fields?: string | null
   readonly orFields?: string | null
   readonly notFields?: string | null
   readonly notOrFields?: string | null
   readonly prioriteFields?: string | null
   readonly prioriteOrFields?: string | null
   readonly exception?: boolean | null
}