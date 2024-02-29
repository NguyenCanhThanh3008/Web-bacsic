package fa.training.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fa.training.entities.Bill;

@Repository
public interface BillRepository extends JpaRepository<Bill, Integer> {

}
