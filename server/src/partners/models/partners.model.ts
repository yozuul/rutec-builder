import { Table, Column, Model, DataType, ForeignKey, BelongsTo, } from 'sequelize-typescript';
import { PartnersCity } from './partners-city.model';

const { INTEGER, STRING } = DataType

@Table({ tableName: 'partners' })
export class Partners extends Model<Partners> {
   @Column({
      type: INTEGER,
      unique: true, autoIncrement: true, primaryKey: true
   }) id: number

   @Column({
      type: STRING, allowNull: false,
   }) companyName: string;

   @Column({
      type: STRING, allowNull: false,
   }) companyType: string;

   @ForeignKey(() => PartnersCity)
   @Column({
      type: INTEGER, allowNull: false
   }) cityId: number;

   @BelongsTo(() => PartnersCity)
   city: PartnersCity;

   @Column({
      type: STRING, allowNull: false,
   }) adress: string;

   @Column({
      type: STRING, allowNull: false,
   }) companySpec: string;

   @Column({
      type: STRING, allowNull: true,
   }) companyAreas: string;

   @Column({
      type: INTEGER, allowNull: false,
   }) experience: number;

   @Column({
      type: STRING, allowNull: false,
   }) email: string;

   @Column({
      type: STRING, allowNull: true,
   }) phone: string;

   @Column({
      type: STRING, allowNull: true,
   }) companyEmployee: string;

   @Column({
      type: STRING, allowNull: true,
   }) employeePosition: string;

   @Column({
      type: STRING, allowNull: true,
   }) status: string;
}