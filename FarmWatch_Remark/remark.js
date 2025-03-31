import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'

const file = await unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeStringify)
  .process(`
    # Users
   This will the group of people who will be using the app and dashboard, grouped based into their jobs.

### Field User
   Field users are the workers who tend to the buildings, coops, and chickens. Their primary job with the dashboard and the app is to log the necessary data that can come from the buildings such as the **Average Live Weight, Mortality, and Feed Consumption**, additionally, the **Feed Delivery** is also added in order to easily buy Feeds from the app.
   
   It is important that the functions that the app can provide to the field users must be accessible to them in remote areas, with or without mobile data, and must be able to work even in low specs mobile phones.

### Office User
   Office users  are the workers who manages the farm from their offices. Their job with the dashboard and the app is to allow quick monitoring of all the buildings within their computers, allows quick accessible data. The main dashboard itself provide enough data to diagnose whether the farms are running smoothly, or should there be changes that should be done with the information presented to them.

   The Data from the sensors **(Temperature, Relative Humidity, Ammonia, Carbon Dioxide)** and from the app **(Feed Consumption, Mortality, Average Live Weight, and Feed Delivery)** be easily read from the main dashboard, while a more in-depth database can be accessible by going through the per building dashboard (snapshot/historic dashboard).

### Data Analyst User
   Data Analysts collects data from the dashboard and be able to infer conclusion and decisions from the data collected. The users must have direct access to all the data that the dashboard can collect, and be able to easily compare them to each other.

### Owner
   The owner should have quick access to all data just like the data analyst and office users. The owner should have full access and control to the app and dashboard.

# Dashboards

## Overview/Main
   The Overview or Main Dashboard is the main gateway to the other dashboards that focuses more on each farms and or buildings. The design of this dashboard is for convenience so that users, mainly field and office users, can easily see the latest data of each building in a single window. 

   Furthermore, the users can also see the hourly trends of the data, the threshold status, the average from the day before and the average from the week before. The data trends allows easy telling whether this data has been increasing or decreasing from the past hour. The threshold status indicates whether the latest data has been going above or under the specified threshold. The average data from the day before and from the week before which allows the user to easily compare whether the current readings has been higher or lower compared to last day or last week.

### [Overview Widgets](widgets_overview)

![image](https://github.com/user-attachments/assets/01b632b5-c3b7-4b89-88b7-1db6e68f5a19)


##  Snapshot View
   The snapshot dashboard is the dashboard which will provide the most details regarding the latest data for that building, this dashboard is made so that the user can focus on a single building and look at the data that the building has. Each building has their own snapshot and historic dashboard, and this dashboard allows the users to visualize the latest data from the sensors, as well as the necessary details that is needed for resource management for the building, and the chicken quality of each building. Office Users can oversee each building from this dashboard if there are certain things that the main dashboard cannot provide. 

   This dashboard provide the more in-depth details regarding the latest data each building has.
   - The 3 Device widget is here to present the data for the environment sensors (temp, rh, CO2, NH3) and show the hourly trend, and the average from previous day and previous week.
   - Heat Index Chart to showcase the current heat index of the building and show the hourly trend, and the average from previous day and previous week.
   - The Resource widget is here to present the latest data for the feed consumption and trends, Total feeds, and remaining feeds.
   - The Chicken Quality widget is here to present the latest data for the ALW and trends, Mortality and trends, as well as the Current and Original Population.

### [Snapshot Widgets](widgets_snapshot)

![image](https://github.com/user-attachments/assets/2c7eed2f-ecf3-4924-a25d-1191d68f922b)



##  Historic View
   The Historic Dashboard is made in order to showcase the collected data from each cycle. Data Analysts can use this dashboard in order to study, infer, and create decisions for the farm itself. They can grab data and correlate them to each other and provide an educated response to such data. The dashboard itself is full of widgets which compares the data collected with time, or with each other.

   The dashboard allows for initial comparison of input and output data through time using a timeseries lines chart, seeing if whether an increase of the input also has an increase to the output, or some other event. Additionally, another widget is made in order to clearly see the trend with the datasets, showing whether there is a significant correlation between two datasets, the input and output. And lastly, another widget is presented to the dashboard which showcase the series of data that cannot be shown as a graph for each cycle such as the population, and feed count.

### [Historic Widgets](widgets_historic)

![image](https://github.com/user-attachments/assets/15c1052c-467b-4e26-9d01-bb5aa83e60df)


##  Farm Input View
   This Dashboard allows users, mainly office user and owners, to input data that the building use as reference. The office and owner can use this to provide the references needed for each data, which are needed to start the cycle, such as the starting population and the starting feed count, as well as the references needed for the ALW, Mortality, and Feed Consumption, and lastly, as references for the sensor thresholds. The following are the data that can be edited/viewed in the dashboard:
   - ALW Reference
   - Mortality Reference
   - Feed Consumption Reference
   - Temperature Upper/Lower Threshold
   - Humidity Upper/Lower Threshold
   - Carbon Dioxide Upper/Lower Threshold
   - Ammonia Upper/Lower Threshold
   - Starting Population

##  Cycle Maintenance View*
   This Dashboard allows users to quickly access allow general details for each cycles, as well as place notes for each cycle. The Office, and owner can use this to initialize the data needed for each cycle, the name, start, and end, as well as add notes to each cycle, if needed be.
   - Cycle Id
   - Start Cycle
   - End Cycle
   - Cycle Name
   - Notes

    `)

console.log(String(file)) // => '<h1>Hello, <em>Mercury</em>!</h1>'