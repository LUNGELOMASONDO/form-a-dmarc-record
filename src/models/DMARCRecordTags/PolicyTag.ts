import { IDMARC1RecordTag } from "../IDMARC1RecordTag";
import { TagImportance } from "../TagImportance";
import { DMARCPolicy } from "../DMARCPolicyType"

export class PolicyTag implements IDMARC1RecordTag{
    readonly tag = "p";
    readonly importance = TagImportance.MANDATORY;
    value?: DMARCPolicy;
    readonly purpose = "Policy for organizational domain";
}