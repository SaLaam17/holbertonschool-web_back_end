#!/usr/bin/env python3
"""
Module for the coroutine async_comprehension that collects 10 random numbers
asynchronously using an async comprehension over async_generator.
"""

from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    Coroutine that collect 10 random numbers
    using an async comprehensing over async_generator,
    then return the 10 random numbers.
    """
    return [result async for result in async_generator()]
