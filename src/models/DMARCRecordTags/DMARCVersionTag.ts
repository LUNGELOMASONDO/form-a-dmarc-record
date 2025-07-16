import { IDMARCRecordTag } from '../IDMARCRecordTag';
import { TagImportance } from '../TagImportance'

export class DMARCVersionTag implements IDMARCRecordTag{
    tag = 'v';
    importance = TagImportance.MANDATORY;
    value?: string; 
}