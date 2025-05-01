#!/usr/bin/env python3
"""
Module for the "schools_by_topic" function
that returns the list of school having a specific topic.
"""


def schools_by_topic(mongo_collection, topic):
    """
    function that returns the list of school
    having a specific topic.
    """

    return list(mongo_collection.find({"topics": {"$in": [topic]}}))
