# Inventory Tracking Application

This is a basic inventory tracking service, built using Node, Express and MongoDB

## _API Use Guide:_

To run on a dev environtment, use **npm run dev**
To run on a , use **npm run dev**

### **Functionalities**

- To Get all inventory items, send a **GET** request to **<http://localhost:8000/api/v1/inventory/>**
- To Get an inventory item, send a **GET** request to **<http://localhost:8000/api/v1/inventory/>**

- To create an inventory item, send a **POST** request to **<http://localhost:8000/api/v1/inventory>**, with a JSON object:

      ``` JSON

        {
      
            "name": "digestive biscuits"

        }

      ```
- To update an inventory item, send a **PUT** request to **<http://localhost:8000/api/v1/inventory/6283a382b9464fc203324cb6>**, with a JSON object:

      ``` JSON

        {
      
            "name": "very digestive biscuits"

        }

      ```
- To delete an inventory item, send a **DELETE** request to **<http://localhost:8000/api/v1/inventory/6283a382b9464fc203324cb6>**, with a JSON object:

      ``` JSON

        {
      
            "deletionComment": "this item is not up to standards"

        }

      ```
- To undelete an inventory item, send a **PATCH** request to **<http://localhost:8000/api/v1/inventory/6283a382b9464fc203324cb6>**, with a JSON object:

Enjoy!!!
