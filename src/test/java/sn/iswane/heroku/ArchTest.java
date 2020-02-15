package sn.iswane.heroku;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {

        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("sn.iswane.heroku");

        noClasses()
            .that()
                .resideInAnyPackage("sn.iswane.heroku.service..")
            .or()
                .resideInAnyPackage("sn.iswane.heroku.repository..")
            .should().dependOnClassesThat()
                .resideInAnyPackage("..sn.iswane.heroku.web..")
        .because("Services and repositories should not depend on web layer")
        .check(importedClasses);
    }
}
