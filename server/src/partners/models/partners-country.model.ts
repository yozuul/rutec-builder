import {
  Table, Column, Model, DataType, HasMany, BelongsToMany
} from 'sequelize-typescript';
import { Partners } from './partners.model';
import { PartnersCity } from './partners-city.model';
import { CityToCountry } from './city-to-county.model';

 @Table({ tableName: 'partners_country', timestamps: false })
 export class PartnersCountry extends Model {
   @Column({
      type: DataType.STRING,
      allowNull: false,
   }) name: string;

   @HasMany(() => Partners)
   partners: Partners[];

  @BelongsToMany(() => PartnersCity, () => CityToCountry, 'countryId', 'cityId')
  cities: PartnersCity[];
 }