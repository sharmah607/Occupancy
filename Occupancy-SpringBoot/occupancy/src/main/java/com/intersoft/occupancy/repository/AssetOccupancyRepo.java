package com.intersoft.occupancy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.intersoft.occupancy.entity.AssetOccupancy;

@Repository
public interface AssetOccupancyRepo extends JpaRepository<AssetOccupancy,Long>{

}
