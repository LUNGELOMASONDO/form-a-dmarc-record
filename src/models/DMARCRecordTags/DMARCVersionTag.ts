import { IDMARC1RecordTag } from '../IDMARC1RecordTag';
import { TagImportance } from '../TagImportance';
import { DMARCVersion } from '../DMARCVersionType';

export class DMARCVersionTag implements IDMARC1RecordTag{
    readonly tag = 'v';
    readonly importance = TagImportance.MANDATORY;
    readonly value: DMARCVersion = "DMARC1"; 
    readonly purpose = "Protocol version";
}