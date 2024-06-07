package com.intersoft.occupancy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.intersoft.occupancy.entity.AssetOccupancy;
import com.intersoft.occupancy.repository.AssetOccupancyRepo;

@RestController
@CrossOrigin("http://localhost:3000")
public class occupancyController {
	
	@Autowired
	private AssetOccupancyRepo assetOccupancyRepo;
	
	@PostMapping("/OccupancyIsPost")
	AssetOccupancy newOccupancy(@RequestBody AssetOccupancy occ) {
		return assetOccupancyRepo.save(occ);
	}
}
