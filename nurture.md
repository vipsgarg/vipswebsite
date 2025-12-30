```mermaid
flowchart TD

%% ================
%% Onboarding
%% ================
A[Start] --> B[Realtor Onboarding]
B --> B1[Profile info\nName, email, phone, yrs exp\ncompany/brokerage]
B1 --> B2[Brand assets\nHeadshot + logo]
B2 --> B3[Signature + Links\nCalendar link, website, socials]
B3 --> B4[Style intake\nTone / examples / do & don't]
B4 --> C[Dashboard]

%% ================
%% Campaign Setup
%% ================
C --> D[Create Campaign]
D --> D1[Campaign name]
D1 --> D2[Select Lead Type\nBuyer/Seller/Investor/Past Client/Cold/Referral]
D2 --> D3[Select Objective(s)\nBook call, nurture, listing promo, re-engage]
D3 --> D4[Optional Target City\nSurrey/Burnaby/etc.]
D4 --> D5[Start date + Timezone]
D5 --> D6[Choose Cadence Preset\nAuto recommended by lead type]
D6 --> E[Campaign Created]

%% ================
%% Lead Upload
%% ================
E --> F[Add / Upload Leads]
F --> F1[CSV upload]
F --> F2[Google Sheet import]
F --> F3[Image upload\n(handwritten list/photo)]
F1 --> G[Leads Normalized + Dedupe]
F2 --> G
F3 --> G
G --> G1[Consent check\nEmail opt-in, SMS opt-in]
G1 --> H[Leads Enrolled in Campaign]

%% ================
%% Draft Generation & Approval
%% ================
H --> I[Automation Tab]
I --> I1[Generate Drafts\nMonth 1 sequence]
I1 --> I2[Review & Edit\nper email/SMS]
I2 --> I3[Approve Campaign Content]
I3 --> J[Schedule Messages\nbased on cadence + triggers]

%% ================
%% Send + Track
%% ================
J --> K[Send Engine]
K --> K1[Email via Resend]
K --> K2[SMS via SMS provider]
K1 --> L[Tracking Events\nopen/click/reply/bounce/unsub]
K2 --> L

%% ================
%% Lead Scoring + Actions
%% ================
L --> M[Lead Engagement Score]
M --> N{Score >= threshold?}
N -->|Yes| O[Hot Lead Alert\nnotify realtor + create task]
O --> O1[Realtor calls OR AI agent calls]
N -->|No| P[Continue Nurture]

%% ================
%% Monthly / Year-round Loop
%% ================
P --> Q{Next Month Content Needed?}
Q -->|Yes| R[Auto-generate next month drafts\nX days before month start]
R --> S[Realtor review window\nApprove/skip]
S --> J
Q -->|No| T[Evergreen nurture continues\nlow-frequency]
T --> J

%% ================
%% Special Broadcasts / Trigger Emails
%% ================
C --> U[Broadcasts & Event Campaigns]
U --> U1[Market Report\nMonthly]
U --> U2[BoC announcement\nAd-hoc]
U --> U3[Holiday / Congrats\nTemplate-driven]
U1 --> V[Generate content\nmanual upload OR auto data]
U2 --> V
U3 --> V
V --> W[Select audience segment]
W --> X[Review & Approve]
X --> J
