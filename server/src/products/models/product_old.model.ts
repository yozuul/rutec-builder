import {BOOLEAN} from 'sequelize';
import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";

const { INTEGER, STRING } = DataType

interface ProductCreationAttrs {
   name: string
   url: string
   recText: string
   fields: string
   orFields: string
   notOrFields: string
   prioriteFields: string
   prioriteOrFields: string
   exception: boolean
}

@Table({ tableName: 'products_old' })
export class ProductOld extends Model<ProductOld, ProductCreationAttrs> {
   @Column({
      type: INTEGER,
      unique: true, autoIncrement: true, primaryKey: true
   }) id: number

   @Column({
      type: STRING, allowNull: false
   }) name: string

   @Column({
      type: STRING, allowNull: false
   }) url: string

   @Column({
      type: STRING, allowNull: true, defaultValue: null
   }) recText: string

   @Column({
      type: STRING, allowNull: true, defaultValue: null
   }) fields: string

   @Column({
      type: STRING, allowNull: true, defaultValue: null
   }) orFields: string

   @Column({
      type: STRING, allowNull: true, defaultValue: null
   }) notFields: string

   @Column({
      type: STRING, allowNull: true, defaultValue: null
   }) notOrFields: string

   @Column({
      type: STRING, allowNull: true, defaultValue: null
   }) prioriteFields: string

   @Column({
      type: STRING, allowNull: true, defaultValue: null
   }) prioriteOrFields: string

   @Column({
      type: BOOLEAN, allowNull: true, defaultValue: null
   }) exception: boolean

   // @BelongsToMany(() => Area, () => Subscribe)
   // areas: Area[]
}