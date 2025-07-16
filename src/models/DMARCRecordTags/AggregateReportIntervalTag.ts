import { IDMARC1RecordTag } from "../IDMARC1RecordTag";
import { TagImportance } from "../TagImportance";

export class AgregateReportIntervalTag implements IDMARC1RecordTag{
    readonly tag = "ri";
    importance = TagImportance.OPTIONAL;
    value?: number;
    readonly purpose = "Interval requested between aggregate reports (default is 86400)";
}