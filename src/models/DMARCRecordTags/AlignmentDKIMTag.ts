import { IDMARC1RecordTag } from '../IDMARC1RecordTag';
import { TagImportance } from '../TagImportance'
import { AlignmentMode } from '../AlignmentModeType';

export class AlignmentDKIMTag implements IDMARC1RecordTag{
    readonly tag = 'adkim';
    importance = TagImportance.OPTIONAL;
    value?: AlignmentMode;
    readonly purpose = "Alignment mode for DKIM";
}