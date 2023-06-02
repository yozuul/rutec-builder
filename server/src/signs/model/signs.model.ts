import { Column, DataType, ForeignKey, Model, Table, BelongsTo } from "sequelize-typescript";
import { SignsGroups } from './signs-group.model';

const { INTEGER, STRING, BOOLEAN } = DataType

interface SignsCreationAttrs {
   name: string
   signGroupId: number
   placeholder: string | null,
   trouble: boolean
   alert: boolean
   blockRecomendation: boolean
   special: boolean
   numbersOnly: boolean
   required: boolean
}

@Table({ tableName: 'signs' })
export class Signs extends Model<Signs, SignsCreationAttrs> {
   @Column({
      type: INTEGER,
      unique: true, autoIncrement: true, primaryKey: true
   }) id: number

   @Column({
      type: STRING, allowNull: false
   }) name: string

   @ForeignKey(() => SignsGroups)
   @Column({
      type: INTEGER, allowNull: false
   }) signGroupId: number

   @BelongsTo(() => SignsGroups)
   signGroup: SignsGroups

   @Column({
      type: STRING, allowNull: true, defaultValue: null
   }) placeholder: string

   @Column({
      type: BOOLEAN, allowNull: false, defaultValue: false
   }) trouble: boolean

   @Column({
      type: BOOLEAN, allowNull: false, defaultValue: false
   }) alert: boolean

   @Column({
      type: BOOLEAN, allowNull: false, defaultValue: false
   }) blockRecomendation: boolean

   @Column({
      type: BOOLEAN, allowNull: false, defaultValue: false
   }) special: boolean

   @Column({
      type: BOOLEAN, allowNull: false, defaultValue: false
   }) numbersOnly: boolean

   @Column({
      type: BOOLEAN, allowNull: false, defaultValue: false
   }) required: boolean
}