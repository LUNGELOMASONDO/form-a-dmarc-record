import { TagImportance } from './TagImportance';
import { DMARC1Tag } from './DMARCTagType';

export interface IDMARC1RecordTag
{
    readonly tag: DMARC1Tag;
    importance: TagImportance;
    readonly purpose: string;
    validityStatusMessage?: string;

    ExistsInRecord?(record: string): boolean;
    isValid?(): boolean;
}