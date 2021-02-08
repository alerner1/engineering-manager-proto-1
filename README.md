
SCREEN 4

DONE -- get rid of blockers column and name it predicted risk
DONE -- make it horizontal rectangle that is colored red, orange, yellow, or green
DONE -- default on page is that they're sorted with red on top then orange etc
DONE -- all numbers on page should range from 0-10
DONE -- red will have risk alerts 7-10, orange 5-6, yellow 2-4, green 0-1

Design notes:

DONE -- remove radio button on top right in favor of focus on design errors
-- (my input: implement titles so you know where you are)

--"predicted design errors" would bring you to screen 4
  --shows list of design errors along with predicted risk broken up into high/medium/low risk
  --if you click on a specific design error it brings you to stock part page

--predicted design errors is three color barchart: yellow/orange/red. red=high, orange=medium, yellow=low (show in legend)

--We probably want to label the parts as high medium low severity as an additional column there)

DONE --replace "upcoming critical tasks" and "predictions" with "predicted risk"

DONE (except dropdowns) --functionality to show how % of design errors changes over time for each program
(or division I suppose?) (fig a)

--driver analysis shows top correlates of design errors. some have dots that we have set up as deep dives (fig b)
  
  if you click on one:
  --show a boxplot that shows how # of iterations varies with the likelihood of design error (fig c)
  --show a scatterplot showing length of reviewer comments (as measured by the # of sheets) is linked to design errors (fig d)
  --process recommendations: involving experts in thermal requirements too late in the design process is linked to errors (fig e)

--automation doesn't go to anything right now but mouseover text (or tooltip, whatever) says "under construction"

HEROKU

[amplitude, jellyfish, engineering]

--i'm still unclear on what the screen2 radio buttons do, will delete for now

---

TRENDS PAGE

-- dropdowns: division, reason for change
-- reasons options: design error, supplier cannot supply, change in interdependent part, requirements change
-- clicking on one of these filters the specific reasons for change. 
-- in which case, show a smaller bar? 

-- legend: G: no error, Y: unavoidable revision, O: avoidable revision, R: design error

-- bar chart.
  -- x axis: year
  -- y axis: percentage up to 100
  -- each bar labeled at the top with number in the thousands
  -- each bar consists of four colors: green, orange, yellow, red
  -- % errors is increasing over time (-?- maybe this means green at bottom red at top. larger amount of red each year. easy to adjust, regardless)

so what does the data look like for this?

DIVISION --< CHANGE -- REASON
                id

and then we filter by division and reason. cool.
when we say division... really subdivision? yeah let's do that. can always change later.