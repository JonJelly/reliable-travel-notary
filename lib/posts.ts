// ─────────────────────────────────────────────────────────────
// BLOG POSTS  —  Add new posts here
// To add a post: copy one of the objects below, give it a unique
// `slug`, fill in the fields, and add your content in `body`.
// `body` supports basic HTML tags: <p> <h2> <h3> <ul> <li> <strong> <em>
// ─────────────────────────────────────────────────────────────

export interface Post {
  slug: string;
  title: string;
  date: string;         // e.g. "May 15, 2026"
  excerpt: string;      // 1–2 sentence summary shown on blog listing
  category: string;     // e.g. "Notary Tips" | "Apostille" | "Real Estate"
  body: string;         // Full post HTML content
}

export const posts: Post[] = [
  {
    slug: "what-is-an-apostille",
    title: "What Is an Apostille and When Do You Need One?",
    date: "October 15, 2025",
    category: "Apostille",
    excerpt:
      "If you're planning to use a California-issued document in another country, you may need an apostille. Here's everything you need to know about the process.",
    body: `
<p>An <strong>apostille</strong> (pronounced ah-poh-STEEL) is an official certificate that authenticates the origin of a public document for use in countries that are members of the Hague Convention of 1961. Think of it as an international stamp of legitimacy — it tells a foreign government that your document is genuine and was issued by a recognized authority.</p>

<h2>When Do You Need an Apostille?</h2>
<p>You'll need an apostille whenever a California-issued document must be legally recognized in another country. Common situations include:</p>
<ul>
  <li>Getting married abroad</li>
  <li>International adoption</li>
  <li>Working or studying overseas</li>
  <li>Foreign business transactions or property purchases</li>
  <li>Dual citizenship applications</li>
  <li>Retiring in another country</li>
</ul>

<h2>How Does the Apostille Process Work in California?</h2>
<p>In California, apostilles are issued by the <strong>California Secretary of State</strong>. The process typically works like this:</p>
<ul>
  <li>If the document is a private document (like a power of attorney), it must first be notarized by a California Notary Public</li>
  <li>The notarized document is then submitted to the Secretary of State's office with the required fee</li>
  <li>The Secretary of State attaches the apostille certificate</li>
  <li>The authenticated document is returned and ready for international use</li>
</ul>

<h2>How I Can Help</h2>
<p>I handle the entire apostille process for you — from notarizing your document to submitting it to the Secretary of State and getting the authenticated document back to you. This saves you the time and complexity of navigating the process on your own.</p>
<p>Processing times vary from same-day (in-person submission) to several weeks (mail). I'll give you an honest timeline based on your situation and deadline.</p>
`,
  },
  {
    slug: "what-is-a-notary-public",
    title: "What Is a Notary Public? A Plain-Language Explanation",
    date: "September 20, 2025",
    category: "Notary Tips",
    excerpt:
      "Many people need notary services without fully understanding what a notary does or why it matters. Here's a clear, jargon-free explanation.",
    body: `
<p>A <strong>Notary Public</strong> is a licensed official appointed by the state government to serve as an impartial witness during the signing of important documents. Notaries verify the identity of signers, confirm they are signing voluntarily, and certify that the signing took place — helping prevent fraud and protecting everyone involved.</p>

<h2>What Does a Notary Actually Do?</h2>
<p>During a notarization, I:</p>
<ul>
  <li>Verify your identity using a valid, government-issued photo ID</li>
  <li>Confirm you are signing willingly and understand what you're signing</li>
  <li>Watch you sign the document in person</li>
  <li>Apply my official notary seal and signature to certify the notarization</li>
</ul>

<h2>Why Is Notarization Important?</h2>
<p>Notarization provides a layer of trust and legal legitimacy to important documents. Banks, courts, government agencies, and real estate institutions often require notarized documents to confirm their authenticity. Without proper notarization, documents may be rejected or considered legally invalid.</p>

<h2>What Is a Mobile Notary?</h2>
<p>A mobile notary does everything a traditional notary does — but comes to you. Instead of requiring you to drive to an office or government building, I travel to your home, hospital, workplace, or any convenient location. This is especially helpful for urgent situations, those with mobility limitations, or anyone who values their time.</p>

<h2>What Documents Commonly Need Notarization?</h2>
<ul>
  <li>Powers of Attorney</li>
  <li>Real estate documents and loan packages</li>
  <li>Affidavits and sworn statements</li>
  <li>Trust documents and wills</li>
  <li>Contracts and agreements</li>
  <li>Adoption paperwork</li>
  <li>Court documents</li>
</ul>
`,
  },
  {
    slug: "how-to-prepare-for-your-notary-appointment",
    title: "How to Prepare for Your Mobile Notary Appointment",
    date: "August 5, 2025",
    category: "Notary Tips",
    excerpt:
      "A little preparation before your mobile notary arrives makes everything go faster and smoother. Here's a simple checklist to get ready.",
    body: `
<p>Booking a mobile notary is the easy part — I handle all the travel. But a few simple steps on your end will make the appointment quick, smooth, and stress-free. Here's exactly what to do before I arrive.</p>

<h2>1. Do NOT Sign Your Documents in Advance</h2>
<p>This is the most important rule. You <strong>must sign your documents in the presence of the notary</strong>. If you sign beforehand, I cannot notarize the document — we'd have to start over with a fresh copy. Keep your pen down until I arrive.</p>

<h2>2. Have a Valid, Unexpired Government-Issued Photo ID Ready</h2>
<p>Acceptable forms of ID include:</p>
<ul>
  <li>California Driver's License or State ID</li>
  <li>U.S. Passport or Passport Card</li>
  <li>Military ID</li>
  <li>Permanent Resident Card (Green Card)</li>
</ul>
<p>The ID must be current (not expired) and include your photo and physical description. If your ID is expired, contact me before the appointment so we can discuss options.</p>

<h2>3. Make Sure All Signers Are Present</h2>
<p>Every person who needs to sign the document must be physically present during the notarization. I cannot notarize a signature that I did not personally witness.</p>

<h2>4. Have Your Document Ready</h2>
<p>Have all pages of your document ready and organized. If you have multiple documents, let me know in advance so I can plan the appointment time accordingly.</p>

<h2>5. Know Your Location</h2>
<p>Make sure the address you provide is accurate and accessible. If you're in a hospital, nursing home, or gated community, let me know any special instructions for entry so I can find you without delay.</p>

<h2>Questions Before Your Appointment?</h2>
<p>I'm always happy to answer questions before we meet. Call or text me at <strong>818-726-3039</strong> and I'll make sure you're fully prepared.</p>
`,
  },
];

// Helper to get a single post by slug
export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

// Helper to get all posts sorted newest first
export function getAllPosts(): Post[] {
  return [...posts].reverse();
}
