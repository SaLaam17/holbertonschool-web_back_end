#!/usr/bin/env python3
"""
Module for the type-annotated function named "make_multiplier".
"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Type-annotated function named "make_multiplier"
    that takes a float "multiplier"
    as argument and returns a function that multiplies a float by multiplier.
    """
    def mul(x: float) -> float:
        """
        Function that multiplies a float by multiplier.
        """
        return x * multiplier

    return mul
