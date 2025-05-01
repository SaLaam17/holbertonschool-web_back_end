#!/usr/bin/env python3
"""
Module for the "insert_school" function
that inserts a new document
in a collection based on kwargs
"""


def insert_school(mongo_collection, **kwargs):
    """
    function that inserts a new document
    in a collection based on kwargs
    """
    new_document = mongo_collection.insert_one(kwargs)
    return new_document.inserted_id
