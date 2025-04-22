#!/usr/bin/env python3
"""
Module
"""


from typing import Iterable, List, Sequence, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Function's documentation.
    """
    return [(i, len(i)) for i in lst]
