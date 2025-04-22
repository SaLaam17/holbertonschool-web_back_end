#!/usr/bin/env python3
"""
Module
"""


from typing import Iterable, Tuple


def element_length(lst: Iterable[list]) -> list[Tuple]:
    """
    Function's documentation.
    """
    return [(i, len(i)) for i in lst]
