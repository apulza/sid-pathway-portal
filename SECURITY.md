# Security Measures

This document outlines the security measures implemented in this portfolio website to protect against common web vulnerabilities.

## Security Headers

The following security headers are implemented:

- **X-Frame-Options: DENY** - Prevents clickjacking attacks
- **X-Content-Type-Options: nosniff** - Prevents MIME type sniffing
- **X-XSS-Protection: 1; mode=block** - Enables XSS protection
- **Referrer-Policy: strict-origin-when-cross-origin** - Controls referrer information
- **Permissions-Policy** - Restricts access to sensitive APIs (camera, microphone, geolocation)
- **Content-Security-Policy** - Prevents XSS, injection attacks, and unauthorized resource loading
- **Strict-Transport-Security** - Enforces HTTPS connections

## Content Security Policy (CSP)

The CSP policy allows:
- Scripts from same origin and inline (required for React)
- Styles from same origin and inline (required for Tailwind CSS)
- Images from same origin, data URLs, and HTTPS sources
- Fonts from same origin and data URLs
- Connections to same origin and HTTPS sources
- No frame embedding (prevents clickjacking)

## Dependency Security

- Regular security audits with `npm audit`
- Automatic vulnerability fixes with `npm audit fix`
- Regular dependency updates
- Monitoring for outdated packages

## Build Security

- Code splitting for better performance and security
- Vendor chunk separation
- Production builds with security headers

## Security Scripts

Run these commands to maintain security:

```bash
# Check for vulnerabilities
npm run security:audit

# Fix vulnerabilities automatically
npm run security:fix

# Update dependencies
npm run security:update

# Comprehensive security check
npm run security:check
```

## Additional Security Recommendations

1. **Keep dependencies updated** - Run `npm update` regularly
2. **Monitor security advisories** - Check GitHub security tab
3. **Use HTTPS in production** - Always deploy with SSL/TLS
4. **Regular backups** - Keep backups of your code and data
5. **Monitor logs** - Watch for suspicious activity

## Reporting Security Issues

If you discover a security vulnerability, please report it responsibly by:
1. Not creating public issues
2. Contacting the maintainer directly
3. Providing detailed information about the vulnerability
