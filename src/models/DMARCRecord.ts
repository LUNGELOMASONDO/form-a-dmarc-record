import { AgregateReportIntervalTag } from './DMARCRecordTags/AggregateReportIntervalTag';
import { AlignmentDKIMTag } from './DMARCRecordTags/AlignmentDKIMTag';
import { DMARCVersionTag } from './DMARCRecordTags/DMARCVersionTag';
import { FailureReportingOptionsTag } from './DMARCRecordTags/FailureReportingOptionsTag';
import { MessageSpecificFailureReportFormatTag } from './DMARCRecordTags/MessageSpecificFailureReportFormatTag';
import { PercentageTag } from './DMARCRecordTags/PercentageTag';
import { PolicyTag } from './DMARCRecordTags/PolicyTag';
import { SubDomainPolicyTag } from './DMARCRecordTags/SubDomainPolicyTag';
import { URIAggregateTag } from './DMARCRecordTags/URIAggregateTag';
import { URIForensicTag } from './DMARCRecordTags/URIForensicTag';
import { DMARCVersion } from './DMARCVersionType';

export class DMARCRecord {

    v!: DMARCVersionTag;
    p!: PolicyTag;
    pct?: PercentageTag;
    sp?: SubDomainPolicyTag;
    rua?: URIAggregateTag;
    ruf?: URIForensicTag;
    adkim?: AlignmentDKIMTag;
    aspf?: AlignmentDKIMTag;
    ri?: AgregateReportIntervalTag;
    fo?: FailureReportingOptionsTag;
    rf?: MessageSpecificFailureReportFormatTag;
}