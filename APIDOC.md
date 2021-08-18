# *FILL IN NAME* API Documentation
The

## *Fill in Endpoint 1 Title*
**Request Format:** "/name/year"

**Request Type:** GET

**Returned Data Format**: Plain Text

**Description:** Return text of movie names with year in parenthesis.


**Example Request:** *Fill in example request*

**Example Response:**
*Fill in example response in the ticks*

```
1.Interstellar(2014), 2.Peninsula(2020), 3.Tenet(2020)

```

**Error Handling:**
N/A

## *Fill in Endpoint 2 Title*
**Request Format:** "/name/:movie"

**Request Type:** GET

**Returned Data Format**: JSON

**Description:** If put in the valid name at :movie, it returns a JSON of the summary for the three
movies, else an error will occur

**Example Request:** "/name/Tenet"

**Example Response:**
*Fill in example response in the {}*

```json
{
  "Interstellar" : "A science fiction movie that is co-written, directed and produced by\
                    Christopher Nolan.This movie is about a group of astronaut travel through\
                    the warmwhole to search new home for human.",
  "Peninsula" : "A Korean action horror film directed by  Yeon Sang-ho. It is a sequal to Train\
                to Busan. This film is mainly about a soldier with his squad are going back to the\
                wastelands of the Korean peninsula to get a truck full of money. However, the\
                Korean peninsula are now inhabited by zombies and rogue militia.",
  "Tenet" : "A science fiction movie that is written and directed by Christopher Nolan and\
            produced it with Emma Thomas. It is also a co-production between the US and the UK.\
            This film basically talks about how to manipulate time to precent WWIII."
}
```

**Error Handling:**
Possible 400 (invalid request) errors.
The error message will be There was an error requesting data from the serviceError:
{"error":"No summary in server"}
