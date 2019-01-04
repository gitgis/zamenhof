---
title: "Terms & Policies"
date: 2019-01-02T14:05:37+01:00
type: "page"
css_files:
  - "css/terms.css"
---

{{% page-header %}}

# Terms & Policies

{{% /page-header %}}


<ul class="tabs-control">
    <li><a href="#terms-of-service">Terms of Service</a></li>
    <li><a href="#privacy-policy">Privacy Policy</a></li>
</ul>

<div id="terms-of-service">

{{% text-section %}}

## Terms of Service

### One Fourth

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea.

### Three Fourths

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

{{% /text-section %}}

</div>


<div id="privacy-policy">

{{% text-section %}}

## Privacy Policy

### What information do we collect?
We collect information from you when you register on our site or place an order.When ordering or registering on our site, as appropriate, you may be asked to enter your: name, e-mail address, phone number or Skype name. You may, however, visit our site anonymously.

### What do we use your information for?
Any of the information we collect from you may be used in one of the following ways:

To process transactions

{{% blockquote %}}
Your information, whether public or private, will not be sold, exchanged, transferred, or given to any other company for any reason whatsoever, without your consent, other than for the express purpose of delivering the purchased product or service requested.
{{% /blockquote %}}

To send periodic emails

{{< blockquote >}}
The email address you provide for order processing, may be used to send you information and updates pertaining to your order, in addition to receiving occasional company news, updates, related product or service information, etc.
{{< /blockquote >}}

### How do we protect your information?
We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.

We offer the use of a secure server. All supplied sensitive/credit information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our Payment gateway providers database only to be accessible by those authorized with special access rights to such systems, and are required to?keep the information confidential.

After a transaction, your private information (credit cards, social security numbers, financials, etc.) will not be stored on our servers.

### Do we use cookies?
Yes (Cookies are small files that a site or its service provider transfers to your computers hard drive through your Web browser (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember certain information

We use cookies to compile aggregate data about site traffic and site interaction so that we can offer better site experiences and tools in the future. We may contract with third-party service providers to assist us in better understanding our site visitors. These service providers are not permitted to use the information collected on our behalf except to help us conduct and improve our business.

Do we disclose any information to outside parties?
We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.

### California Online Privacy Protection Act Compliance
Because we value your privacy we have taken the necessary precautions to be in compliance with the California Online Privacy Protection Act. We therefore will not distribute your personal information to outside parties without your consent.

As part of the California Online Privacy Protection Act, all users of our site may make any changes to their information at anytime by logging into their Administrator panel and going to the ‘Setup / Main Setup’ page.

### Children’s Online Privacy Protection Act Compliance
We are in compliance with the requirements of COPPA (Children’s Online Privacy Protection Act), we do not collect any information from anyone under 13 years of age. Our website, products and services are all directed to people who are at least 13 years old or older.

### Terms and Conditions
Please also visit our Terms and Conditions section establishing the use, disclaimers, and limitations of liability governing the use of our website at http://zamenhof.net/terms/

### Your Consent
By using our site, you consent to our privacy policy.

### Changes to our Privacy Policy
If we decide to change our privacy policy, we will post those changes on this page, and/or update the Privacy Policy modification date below.

This policy was last modified on 8th of November 2013

### Contacting Us
If there are any questions regarding this privacy policy you may contact us using the information below.

service@zamenhof.net

{{% /text-section %}}

</div>


<script>
var hashLinks = document.querySelectorAll("a[href^='#']");
[].forEach.call(hashLinks, function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    history.pushState({}, "", link.href);
    
    // Update the URL again with the same hash, then go back
    history.pushState({}, "", link.href);
    history.back();
  });
});

if (!window.location.hash) {
  history.pushState({}, "", "#terms-of-service");
} else {
  history.pushState({}, "", window.location.hash);
  history.back();
}
</script>
