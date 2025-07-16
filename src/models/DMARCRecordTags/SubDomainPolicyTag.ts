import { DMARCPolicy } from "../DMARCPolicyType";
import { IDMARC1RecordTag } from "../IDMARC1RecordTag";
import { TagImportance } from "../TagImportance";

export class SubDomainPolicyTag implements IDMARC1RecordTag {
    readonly tag = "sp";
    importance = TagImportance.OPTIONAL;
    value?: DMARCPolicy;
    readonly purpose = "Policy for subdomains of the organisational domain";
}
