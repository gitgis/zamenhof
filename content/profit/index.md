---
title: "Profit"
date: 2019-01-03T20:33:20+01:00
type: "page"
css_files:
  - "css/profit.css"
---

{{% page-header %}}

# Profit Calculator

{{% /page-header %}}


{{% text-section %}}
# Set your expected number of lessons _per week_

<div class="slidecontainer">
  <input type="range" min="0" max="100" value="0" class="slider" id="lessons_per_week_slider">
</div>
{{% /text-section %}}



{{% profit-calculator /%}}



{{% text-section %}}

{{% container-row %}}

{{% container-col class="col-sales" %}}
### Exact Number of Lessons
All the data on this table is calculated based on the amount of lessons sold per week. To change the amount, use the horizontal scroll bar above. Your profit will be calculated based on the projected number and will be displayed in the blue box.
{{% /container-col %}}

{{% container-col class="col-expenses" %}}
### Average Teacher Salary
The salary per lesson of the teachers is based on the course type and the number of renewals. Although we have a different agreement with some teachers, the average salary is $7 per lesson. For more information about the teachers’ salaries, click here.
{{% /container-col %}}



{{% container-col class="col-sales" %}}
### Approximate Number of Students
This data is calculated based on the statistics sent through our network. The number of lessons each week per student varies from one to seven but on average it is three. If you have 3,000 lessons within a week, this calculation would suppose that you have 1,000 active students.
{{% /container-col %}}

{{% container-col class="col-expenses" %}}
### Commission to Zamenhof
The commission per 25-minute lesson starts at $2. It will decrease when you have reached 1,101 lessons per billing cycle (one week). Click here to view the full list of commissions per number of lessons.
{{% /container-col %}}

{{% container-col class="col-sales" %}}
### Approximate Number of Packages (Sales)
This data will give you an approximation of the number of “sales” you have to perform per week to match the number of lessons you preselected. For your first twenty students, the number of sales will match the number of students. After the first-twenty-student students threshold has been crossed, the calculation will take into account the number of renewals (i.e., previous students who are now purchasing the next package of lessons). In short, the more students you have, the fewer sales you will have to make per week.
{{% /container-col %}}

{{% container-col class="col-expenses" %}}
### Minimum Invoice Charge
There is a minimum invoice charge of $25 per week. This charge will be reduced depending on the total of your work order (bill). Basically, a work order can’t be less than $25. For example, if your school has only two lessons within a week, the commission to Zamenhof would be $4 and the teachers’ salary would be $12 (work order total $16), so the minimum invoice charge will be $9 to reach the minimum of $25.
{{% /container-col %}}

{{% container-col class="col-earnings" %}}
### Average Sales Price per Lesson
This value is up to your price strategy. We set the default value at US$14 per lesson because it is the average price per lesson, per course type, throughout the Zamenhof network. For more information about the price setup, click here.
{{% /container-col %}}

{{% container-col class="col-expenses" %}}
### Connection Fees
From your Administrator Panel, you will have full control over the price you charge your students for the connection (landline/mobile phone). You will be charged by Zamenhof the exact sum in US dollars that Twilio is currently charging. The connection charge can be either a loss for you (if you charge your students less than it actually costs), or you can earn a profit from it.
{{% /container-col %}}

{{% container-col class="col-profit" %}}
### Profit per:
In this table, you will find the profit (earnings minus expenses) for a period of one week, one month, or one year.
{{% /container-col %}}

{{% container-col class="col-expenses" %}}
### Weekly Publicity Budget
This value is up to you and may be based on your experience in promoting a language service. We are not able to provide an average due to the wide range of marketing techniques employed by our partners. However, if you enter data (per week) in this box, it will reflect accordingly in the Profit box.
{{% /container-col %}}

{{% container-col %}}
### More Information?
This pricing page briefly describes the parameters that constitute this calculation.
For more information about every field, consult the [“Help and Support”](http://zamenhof.net/faq/) page.
{{% /container-col %}}

{{% container-col class="col-expenses" %}}
### Administrator Salary (per Week)
Zamenhof’s promise is that a single administrator can handle up to 500 students on his own. In this field, enter a value you expect to spend for the salary of an administrator (per week), and the profit will be calculated accordingly.
{{% /container-col %}}

{{% /container-row %}}


{{% /text-section %}}
