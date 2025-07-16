import { IDMARC1RecordTag } from '../IDMARC1RecordTag';
import { TagImportance } from '../TagImportance'

export class URIAggregateTag implements IDMARC1RecordTag{
    readonly tag = 'rua';
    importance = TagImportance.OPTIONAL;
    value?: string; 
    readonly purpose = "Reporting URI of aggregate reports";
}