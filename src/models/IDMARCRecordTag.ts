import { TagImportance } from './TagImportance';

export interface IDMARCRecordTag
{
    tag: string;
    readonly importance: TagImportance;
}