
SCREEN 4

-- get rid of blockers column and name it predicted risk
-- make it horizontal rectangle that is colored red, organe, yellow, or green
-- default on page is that they're sorted with red on top then orange etc
-- all numbers on page should range from 0-10
-- red will have risk alerts 7-10, orange 5-6, yellow 2-4, green 0-1

Design notes:

DONE -- remove radio button on top right in favor of focus on design errors

--"predicted design errors" would bring you to screen 4
  --shows list of design errors along with predicted risk broken up into high/medium/low risk
  --if you click on a specific design error it brings you to stock part page

--predicted design errors is three color barchart: yellow/orange/red. red=high, orange=medium, yellow=low (show in legend)

--We probably want to label the parts as high medium low severity as an additional column there)

--replace "upcoming critical tasks" and "predictions" with "predicted risk"

--functionality to show how % of design errors changes over time for each program
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
