#!/usr/bin/env python3
"""
Module for  type-annotated function named "to_kv".
"""

from typing import Union


def to_kv(k: str, v: Union[int, float]) -> tuple[str, float]:
    """
    type-annotated function named "to_kv" that takes a string "k" and an int OR float "v" as arguments and returns a tuple. The first element of the tuple is the string "k". The second element is the square of the int/float v and should be annotated as a float.
    """
    tpl = (k, v*v)
    return tpl
