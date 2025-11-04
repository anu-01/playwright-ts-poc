# Set up continuous end-to-end testing with Playwright Workspaces

This guide explains how to set up **Playwright Workspaces** for continuous end-to-end testing on the **TypeScript Playwright project** (`playwright-ts-poc`).  

## Prerequisites

- Azure Subscription: Ensure you have an active Azure account.
- Playwright repo with test cases

---

## Step 1: Create a Workspace
- Sign in to the Azure portal
- Create a new playwright workspace
- Navigate to your workspace and select the get started page
![alt text](image.png)

- Goto step 3: Add Region endpoint to your setup, copy the URL
- Save the Playwright workspace URL as CI workflow secret with name "PLAYWRIGHT_SERVICE_URL"
- Add service configuration file playwright.service.config.ts from the sample repo: https://github.com/Azure/playwright-workspaces/blob/main/samples/playwright-tests/playwright.service.config.ts
- Save and commit the file to your source code repo
- Update package.json file to add playwright workspaces package
```csharp
"devDependencies": {
    "@azure/playwright": "latest"
}
```

## Step 2: Setup Entra ID Authentication

1. In Azure portal, navigate to Entra ID and Create App Registration
    - Go to Azure Portal > Microsoft Entra ID > App Registrations.
    - Create a new app registration.

2. Grant Permissions
    - Ensure the app has necessary permissions (e.g., Azure Service Management or Playwright service-specific permissions).

3. Configure GitHub Actions for OIDC
OIDC allows GitHub Actions to authenticate directly with Azure without storing credentials. Make sure you’ve followed the required setup:
    - Go to Azure Active Directory > App Registrations > Federated Credentials.
    - Create a new credential with: Slect
        * Subject Identifier: repo:<OWNER>/<REPO>:branch:<branch_name>
        * Audience: api://AzureADTokenExchange.

4. Set Secrets in GitHub Actions
    - Add the following secrets:
       * AZURE_CLIENT_ID
       * AZURE_TENANT_ID
       * AZURE_SUBSCRIPTION_ID

5. Assign Contributor Role to App
    - Go to your Playwright Workspace in Azure Portal.
    - Navigate to Access Control (IAM) and assign the Contributor role to the app.


## Next Steps
Once setup is complete:

Configure your GitHub Actions workflow to run Playwright tests automatically.

Example CI workflow: msplaywright.yml