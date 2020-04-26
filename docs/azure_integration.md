# Rss App and Microsoft Azure integration notes and pricing
  
  
The Rss App was designed with integration with Microsoft Azure in mind.

Unfortunately, due to limitations iposed by Microsoft Azure on student subsriptions, we are currently unable to deploy MySQL database to Microsoft Azure.

The RssApp is currently deployed to Microsoft Azure App Service under LINK.

When it comes to app pricing, there are two cost-generators that will be discussed below: Azure App Service subscription and MySQL database for Microsoft Azure.


## Azure App Service Pricing

We suggest to select the Standard Service Plan. As described by Microsoft, it is designed for production workloads and includes autoscale to adjust the number of VMs to traffic needs. For 1 core, 1.75MB of RAM and up to 50GB disk storage, the price is around 61.561 euro per month.

An app service domain costs 10.112 euro per year and includes privacy protection. 

A standard SSL certificate valid for one year costs 59.023 euro. A wildcard SSL certificate valid for one year costs 252.982 euro per year. However, app service managed certificates are free of charge. There is also no charge to use SNI-based SSL.

For more information, see https://azure.microsoft.com/en-us/pricing/details/app-service/windows/ .


## MySQL Database for Microsoft Azure Pricing

For a commercial release of the RSS App, we recommend either the Basic pricing tier, or the General Purpose pricing tier.

In the Basic pricing tier for North Europe, compute provided with 1 vCore costs around 22.409 euro per month. Compute with 2 vCores costs 44.817 euro per month.

Storage, up to 1 TB, costs 0.093 euro per GB per month. Backup also costs 0.093 euro per GB per month.

For more details, see https://azure.microsoft.com/en-us/pricing/details/mysql/ .




