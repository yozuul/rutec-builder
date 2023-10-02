import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { PartnersCity } from './partners-city.model';
import { PartnersCountry } from './partners-country.model';

@Table({ tableName: 'city_to_country', timestamps: false })
export class CityToCountry extends Model {
  @ForeignKey(() => PartnersCity)
  @Column
  cityId: number;

  @ForeignKey(() => PartnersCountry)
  @Column
  countryId: number;


  @BelongsTo(() => PartnersCity)
  city: PartnersCity;

  @BelongsTo(() => PartnersCountry)
  country: PartnersCountry;
}