import { IDMARC1RecordTag } from '../IDMARC1RecordTag';
import { TagImportance } from '../TagImportance'

export class URIForensicTag implements IDMARC1RecordTag{
    readonly tag = 'ruf';
    importance = TagImportance.OPTIONAL;
    value?: string; 
    readonly purpose = "Reporting URI for forensic reports";
}