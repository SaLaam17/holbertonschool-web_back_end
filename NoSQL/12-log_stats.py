#!/usr/bin/env python3
from pymongo import MongoClient

client = MongoClient('mongodb://127.0.0.1:27017')
db = client.logs.nginx

# print("Connexion à MongoDB réussie !") Test de connexion

total_logs = db.count_documents({})
print(f"{total_logs} logs")  # Affichage des logs
print("Methods:")
methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]

for method in methods:
    count = db.count_documents({"method": method})
    print(f"\tmethod {method}: {count}")
