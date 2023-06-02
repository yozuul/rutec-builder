import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import {Signs} from './signs.model';

const { INTEGER, STRING, BOOLEAN } = DataType

interface SignsGroupCreationAttrs {
   orderPosition: number
   name: string
   part: string,
   fieldsType: string
   trouble: boolean
   function: boolean
}

@Table({ tableName: 'signs_group' })
export class SignsGroups extends Model<SignsGroups, SignsGroupCreationAttrs> {
   @Column({
      type: INTEGER,
      unique: true, autoIncrement: true, primaryKey: true
   }) id: number

   @Column({
      type: INTEGER, allowNull: false, defaultValue: 1
   }) orderPosition: number

   @Column({
      type: STRING, allowNull: false
   }) name: string

   @Column({
      type: STRING, allowNull: false
   }) part: string

   @Column({
      type: STRING, allowNull: false
   }) fieldsType: string

   @Column({
      type: BOOLEAN, allowNull: false, defaultValue: false
   }) trouble: boolean

   @Column({
      type: STRING, allowNull: true, defaultValue: null
   }) function: string

   @HasMany(() => Signs)
   signs: Signs[]
}