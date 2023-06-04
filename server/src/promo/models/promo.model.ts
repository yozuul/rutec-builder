import { Table, Column, Model, DataType } from 'sequelize-typescript';

const { INTEGER, STRING, TEXT } = DataType

@Table({ tableName: 'promo' })
export class Promo extends Model<Promo> {
   @Column({
      type: INTEGER,
      unique: true, autoIncrement: true, primaryKey: true
   }) id: number

   @Column({
      type: STRING, allowNull: false,
   }) name: string;

   @Column({
      type: STRING, allowNull: false,
   }) type: string;

   @Column({
      type: TEXT, allowNull: true,
   }) text: string;

   @Column({
      type: STRING, allowNull: true,
   }) videoUrl: string;

   @Column({
      type: STRING, allowNull: true,
   }) videoPreview: string;
}