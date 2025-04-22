#!/usr/bin/env python3
"""
Module
"""


from typing import Iterable, Sequence, Tuple


def element_length(lst: Iterable[Sequence]) -> list[Tuple[Sequence, int]]:
    """
    Function's documentation.
    """
    return [(i, len(i)) for i in lst]
