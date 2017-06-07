![EventForce](http://i.imgur.com/yPT45Wp.png)

A Salesforce integration built on-top of NodeJS and Angular (4+). The integration allows Salesforce administrators to create events, sessions and attendees through their Salesforce instance. Users (non-salesforce) can view available events and event details through the Angular app. They may register to an event, which will tie back into the Salesforce environment.

### Technologies
- Angular (4+)
- NodeJS
- Protractor/Jasmine (Testing)
- TypeScript
- RxJS (@ngrx in Angular)
- JSForce (connect NodeJS to SalesForce API)

## Getting Started
1. Run `npm run setup` from the root directory.
2. Run `npm start.server` to initialize the server locally at `http://localhost:3000`.
3. Build the front-end with `npm run build.client`.
4. _Optional:_ If developing you can use the proxy with `npm run start.client` and opening up `http://localhost:4200`.

## Example Images
![Event Listings](http://i.imgur.com/iL19aUl.png)

### SalesForce Schema
**Event**

The representation of events that users can register to.

|Field Label|API Name|Data Type|Description|
|--|--|--|--|
|Event Name|`Name`|Text(80)|The Event's displayed name.|
|Description|`Description__c`|Rich Text Area(32768)|The description of the event.|
|Start|`Start__c`|Date/Time|The Event's start time.|
|End|`End__c`|Date/Time|The Event's end time.|
|Status|`Status__c`|Picklist|The Event's availability status.|
|Registration Limit|`Registration_Limit__c`|Number(18, 0)|The maximum number of allowed attendees.|
|Remaining Seats|`Remaining_Seats__c`|Number(18, 0)|The number of available open seats for registration.|

---

**Session**

The representation of sessions under an event that users can register to.

|Field Label|API Name|Data Type|Description|
|--|--|--|--|
|Session Name|`Name`|Text(80)|The Session's displayed name.|
|Start|`Start__c`|Date/Time|The Sessions's start time.|
|End|`End__c`|Date/Time|The Sessions's end time.|
|Status|`Status__c`|Picklist|The Sessions's availability status.|
|Registration Limit|`Registration_Limit__c`|Number(18, 0)|The maximum number of allowed attendees.|
|Event|`Event__c`|Master-Detail(Event)|The relationship join to the parent Event.|

---

**Attendee**

The representation of a user attending a session and/or event.

|Field Label|API Name|Data Type|Description|
|--|--|--|--|
|First Name|`First_Name__c`|Text(180)|The attendee's first name.|
|Last Name|`Last_Name__c`|Text(255)|The attendee's last name.|
|Company|`Company__c`|Text(255)|_Optional:_ The attendee's company name.
|Phone|`Phone__c`|Phone|_Optional:_ The attendees contact number.|
|Email|`Email__c`|Email|The attendees email address.|
|Event|`Event__c`|Master-Detail(Event)|The relationship join to the attending events.|

---

**SessionAttendee**

The representation of the association between attendees and sessions (one-to-many).

|Field Label|API Name|Data Type|Description|
|--|--|--|--|
|Attendee|`Attendee__c`|Master-Detail(Attendee)|The relationship join to the attendee.|
|Session|`Session__c`|Master-Detail(Session)|The relationship join to the session.|

### Testing

**Front-end**

1. Navigate to the client directory `cd app/client`.
2. Run the Angular-CLI testing suite: `ng test`.


# Contributors

[<img alt="Sean perkins" src="https://avatars1.githubusercontent.com/u/13732623?v=3&s=117" width="117">](https://github.com/sean-perkins) |
:---:
|[Sean Perkins](https://github.com/sean-perkins)|
