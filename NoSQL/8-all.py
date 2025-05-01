#!/usr/bin/env python3
"""
Module for the "list_all" function.
"""


def list_all(mongo_collection):
    """
    Function that lists all documents in a MongoDB collection.
    """
    return list(mongo_collection.find())
