import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Partners } from './partners.model';

 @Table({ tableName: 'partners_city', timestamps: false })
 export class PartnersCity extends Model {
   @Column({
      type: DataType.STRING,
      allowNull: false,
   }) name: string;

   @HasMany(() => Partners)
   partners: Partners[];
 }