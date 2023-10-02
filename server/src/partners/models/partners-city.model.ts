import {
  Table, Column, Model, DataType, HasMany, BelongsToMany
} from 'sequelize-typescript';
import { Partners } from './partners.model';
import { PartnersCountry } from './partners-country.model';
import { CityToCountry } from './city-to-county.model';

 @Table({ tableName: 'partners_city', timestamps: false })
 export class PartnersCity extends Model {
   @Column({
      type: DataType.STRING,
      allowNull: false,
   }) name: string;

   @HasMany(() => Partners)
   partners: Partners[];

   @BelongsToMany(() => PartnersCountry, () => CityToCountry, 'cityId', 'countryId')
   countries: PartnersCountry[];
 }