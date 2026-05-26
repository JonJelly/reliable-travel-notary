import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://reliabletravelnotary.com";
  const lastModified = new Date();

  return [
    { url: `${base}/`,                      lastModified, priority: 1.0,  changeFrequency: "monthly" },
    { url: `${base}/services/`,             lastModified, priority: 0.9,  changeFrequency: "monthly" },
    { url: `${base}/apostille-services/`,   lastModified, priority: 0.9,  changeFrequency: "monthly" },
    { url: `${base}/powers-of-attorney/`,   lastModified, priority: 0.9,  changeFrequency: "monthly" },
    { url: `${base}/book-appointment/`,     lastModified, priority: 0.9,  changeFrequency: "monthly" },
    { url: `${base}/pricing/`,              lastModified, priority: 0.8,  changeFrequency: "monthly" },
    { url: `${base}/faq/`,                  lastModified, priority: 0.8,  changeFrequency: "monthly" },
    { url: `${base}/blog/`,                 lastModified, priority: 0.8,  changeFrequency: "weekly"  },
    { url: `${base}/blog/what-is-an-apostille/`,                         lastModified, priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/blog/what-is-a-notary-public/`,                      lastModified, priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/blog/how-to-prepare-for-your-notary-appointment/`,   lastModified, priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/about-us/`,             lastModified, priority: 0.7,  changeFrequency: "monthly" },
    { url: `${base}/contact-us/`,           lastModified, priority: 0.7,  changeFrequency: "monthly" },
    { url: `${base}/make-a-web-payment/`,   lastModified, priority: 0.5,  changeFrequency: "yearly"  },
    { url: `${base}/privacy-policy/`,       lastModified, priority: 0.3,  changeFrequency: "yearly"  },
    { url: `${base}/terms-and-conditions/`, lastModified, priority: 0.3,  changeFrequency: "yearly"  },
  ];
}
