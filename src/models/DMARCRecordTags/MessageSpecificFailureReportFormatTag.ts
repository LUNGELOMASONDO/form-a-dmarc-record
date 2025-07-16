import { IDMARC1RecordTag } from "../IDMARC1RecordTag";
import { TagImportance } from "../TagImportance";
import { MessageSpecificFailureReportFormat } from "../MessageSpecificFailureReportFormatType";

export class MessageSpecificFailureReportFormatTag implements IDMARC1RecordTag{
    readonly tag = "rf";
    importance = TagImportance.OPTIONAL;
    value: MessageSpecificFailureReportFormat = "afrf";
    readonly purpose = "Format to be used for message-specific failure reports";
}