# Pension Planner Website Publishing Guide

Domain: `pensionplannerapp.co.uk`

## Pages
- `/` Home
- `/support/` Support
- `/privacy/` Privacy Policy
- `/data/` Data & Security
- `/disclaimer/` Disclaimer

## Before publishing
1. Configure and test `support@pensionplannerapp.co.uk`. If you choose another address, replace it throughout the site.
2. Re-read the Privacy Policy against the exact App Store build. If you add analytics, crash reporting, cloud sync, accounts, remote storage, advertising or other third-party SDKs, update the policy and App Store privacy disclosures first.
3. Read the Disclaimer and Support wording before making the site public.

## Recommended hosting: GitHub Pages
1. Create a GitHub repository such as `pension-planner-website`.
2. Upload the CONTENTS of this folder to the repository root.
3. Open repository `Settings` → `Pages`.
4. Select `Deploy from a branch`, branch `main`, folder `/ (root)`.
5. GitHub first gives you a `github.io` address.
6. In Pages settings, set custom domain to `pensionplannerapp.co.uk`.
7. GitHub will show the DNS records required.
8. In UK2, add exactly those DNS records.
9. Wait for DNS verification/propagation.
10. Enable `Enforce HTTPS` when available.

The included `CNAME` file already contains the custom domain.

## App Store Connect URLs
Support URL:
`https://pensionplannerapp.co.uk/support/`

Privacy Policy URL:
`https://pensionplannerapp.co.uk/privacy/`

Marketing URL (optional):
`https://pensionplannerapp.co.uk/`

## Updating the site
Replace/edit the relevant files in the repository. GitHub Pages republishes automatically.

## Version
Initial website content prepared for Pension Planner v4.11.
