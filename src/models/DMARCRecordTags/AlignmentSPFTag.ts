import { IDMARC1RecordTag } from '../IDMARC1RecordTag';
import { TagImportance } from '../TagImportance';
import { AlignmentMode } from '../AlignmentModeType';

export class AlignmentSPFTag implements IDMARC1RecordTag{
    readonly tag = 'aspf';
    importance = TagImportance.OPTIONAL;
    value?: AlignmentMode;
    readonly purpose = "Alignment mode for SPF";
}