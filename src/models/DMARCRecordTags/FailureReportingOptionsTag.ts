import { IDMARC1RecordTag } from '../IDMARC1RecordTag';
import { TagImportance } from '../TagImportance';
import { FailureReportingOption } from '../FailureReportingOptionType';

export class FailureReportingOptionsTag implements IDMARC1RecordTag{
    readonly tag = 'fo';
    importance = TagImportance.OPTIONAL;
    value?: FailureReportingOption[];
    readonly purpose = "Percentage of messages subjected to filtering";
}

